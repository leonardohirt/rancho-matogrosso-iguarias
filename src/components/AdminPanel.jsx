import React, { useState, useEffect } from 'react';
import { categories } from '../data/products';
import { PRODUCTS_TABLE_SQL, syncAllProductsToDb, deleteProductFromDb, resetPricesAndDescriptionsOnly } from '../lib/productsService';
import { 
  Lock, 
  User, 
  Key, 
  LogOut, 
  Edit3, 
  Trash2, 
  PlusCircle, 
  RotateCcw, 
  ArrowLeft, 
  Check, 
  Search, 
  Upload, 
  Image as ImageIcon,
  Package,
  Save,
  Cloud,
  CloudCheck,
  AlertCircle,
  Copy,
  ExternalLink,
  X
} from 'lucide-react';

export default function AdminPanel({ products, dbStatus, onUpdateProducts, onResetDefault, onCloseAdmin }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard Filters & Form State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form Fields for Edit / New Product
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('morangos');
  const [formOriginalPrice, setFormOriginalPrice] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');

  const [isSyncingDb, setIsSyncingDb] = useState(false);

  useEffect(() => {
    const authSession = sessionStorage.getItem('rancho_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if ((username.trim().toLowerCase() === 'admin' || username.trim().toLowerCase() === 'adm') && 
        (password === 'rancho123' || password === 'admin123' || password === 'adm')) {
      setIsAuthenticated(true);
      sessionStorage.setItem('rancho_admin_auth', 'true');
      setLoginError('');
      showToast('Bem-vindo ao Painel de Administração!');
    } else {
      setLoginError('Usuário ou senha incorretos. Tente usuário: admin e senha: rancho123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('rancho_admin_auth');
    onCloseAdmin();
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleOpenEdit = (prod) => {
    if (prod) {
      setEditingProduct(prod);
      setFormName(prod.name || '');
      setFormCategory(prod.category || 'morangos');
      setFormOriginalPrice(prod.originalPrice ? prod.originalPrice.toString() : '');
      setFormPrice(prod.price ? prod.price.toString() : '0');
      setFormDescription(prod.description || '');
      setFormImage(prod.image || '');
    } else {
      setEditingProduct({ isNew: true });
      setFormName('');
      setFormCategory('morangos');
      setFormOriginalPrice('');
      setFormPrice('25.00');
      setFormDescription('');
      setFormImage('/assets/morango_premium_colheita.jpg');
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormImage(reader.result);
        showToast('Foto carregada com sucesso!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!formName || !formPrice) return;

    const parsedPrice = parseFloat(formPrice.replace(',', '.'));
    const parsedOriginalPrice = formOriginalPrice ? parseFloat(formOriginalPrice.replace(',', '.')) : null;

    const categoryObj = categories.find(c => c.id === formCategory);
    const categoryLabel = categoryObj ? categoryObj.label : 'OUTROS';

    let updatedList;
    if (editingProduct && editingProduct.isNew) {
      const newProd = {
        id: 'custom-' + Date.now(),
        name: formName,
        category: formCategory,
        categoryLabel,
        originalPrice: (parsedOriginalPrice && parsedOriginalPrice > parsedPrice) ? parsedOriginalPrice : null,
        price: isNaN(parsedPrice) ? 0 : parsedPrice,
        description: formDescription,
        image: formImage || '/assets/morango_premium_colheita.jpg',
        tag: editingProduct.tag || '',
        tagClass: editingProduct.tagClass || ''
      };
      updatedList = [newProd, ...products];
      showToast('Novo produto cadastrado e salvo no banco de dados!');
    } else {
      updatedList = products.map(p => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            name: formName,
            category: formCategory,
            categoryLabel,
            originalPrice: (parsedOriginalPrice && parsedOriginalPrice > parsedPrice) ? parsedOriginalPrice : null,
            price: isNaN(parsedPrice) ? 0 : parsedPrice,
            description: formDescription,
            image: formImage
          };
        }
        return p;
      });
      showToast(`Produto "${formName}" atualizado no banco de dados!`);
    }

    onUpdateProducts(updatedList);
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = async (prodId, prodName) => {
    if (window.confirm(`Tem certeza que deseja excluir o produto "${prodName}" permanentemente?`)) {
      const res = await deleteProductFromDb(prodId, products);
      onUpdateProducts(res.products);
      showToast(`Produto "${prodName}" excluído permanentemente.`);
    }
  };

  const handleReset = () => {
    if (window.confirm('Deseja restaurar os preços e descrições originais dos itens ativos? (Atenção: Itens já excluídos NÃO serão trazidos de volta).')) {
      const resetList = resetPricesAndDescriptionsOnly(products);
      onUpdateProducts(resetList);
      showToast('Preços e descrições restaurados para o padrão.');
    }
  };

  const handleSyncAllDb = async () => {
    setIsSyncingDb(true);
    const res = await syncAllProductsToDb(products);
    setIsSyncingDb(false);
    if (res.success) {
      showToast(`Todos os ${res.count} produtos foram sincronizados com o Supabase com sucesso!`);
    } else {
      alert(`Aviso do Banco Supabase: ${res.error}\n\nExecute o script SQL no editor do Supabase se a tabela ainda não existir.`);
    }
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(PRODUCTS_TABLE_SQL);
    showToast('Código SQL copiado para a área de transferência!');
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  // TELA DE LOGIN (Se não autenticado)
  if (!isAuthenticated) {
    return (
      <div className="admin-login-overlay">
        <div className="admin-login-card">
          <div className="login-card-header">
            <div className="lock-icon-circle">
              <Lock size={24} color="#991B1B" />
            </div>
            <h2>Área Administrativa</h2>
            <p>Digite seu usuário e senha para gerenciar imagens, preços e itens do catálogo.</p>
          </div>

          {loginError && (
            <div className="login-error-alert">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label><User size={15} /> Usuário</label>
              <input 
                type="text" 
                placeholder="Digite seu usuário (Ex: admin)" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label><Key size={15} /> Senha</label>
              <input 
                type="password" 
                placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="help-text">Dica de Acesso: <strong>admin</strong> / <strong>rancho123</strong></span>
            </div>

            <div className="login-actions">
              <button type="submit" className="btn-admin-submit">
                <Lock size={16} /> Entrar no Painel
              </button>
              <button type="button" className="btn-admin-back" onClick={onCloseAdmin}>
                <ArrowLeft size={16} /> Voltar ao Site
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // TELA DO PAINEL DE CONTROLE (Autenticado)
  return (
    <div className="admin-dashboard-root">
      {toastMessage && (
        <div className="admin-toast-banner">
          <Check size={18} /> {toastMessage}
        </div>
      )}

      <header className="admin-dashboard-header">
        <div className="container admin-header-content">
          <div className="admin-header-brand">
            <div className="admin-badge">PAINEL ADM</div>
            <h1>Gerenciador do Catálogo</h1>
          </div>

          <div className="admin-header-actions">
            <button className="btn-admin-action green" onClick={() => handleOpenEdit(null)}>
              <PlusCircle size={18} /> Novo Produto
            </button>
            <button className="btn-admin-action outline" onClick={handleSyncAllDb} disabled={isSyncingDb}>
              <Cloud size={16} /> {isSyncingDb ? 'Sincronizando...' : 'Sincronizar Banco'}
            </button>
            <button className="btn-admin-action outline" onClick={handleReset} title="Restaurar Produtos Padrão">
              <RotateCcw size={16} /> Restaurar Padrões
            </button>
            <button className="btn-admin-action outline" onClick={onCloseAdmin}>
              <ArrowLeft size={16} /> Ir ao Site
            </button>
            <button className="btn-admin-action danger" onClick={handleLogout}>
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>
      </header>

      <main className="container admin-dashboard-body">
        
        {/* Banner Status do Banco Supabase */}
        {dbStatus && !dbStatus.isDbAvailable && (
          <div className="db-alert-card warning">
            <div className="db-alert-header">
              <AlertCircle size={22} color="#D97706" />
              <div>
                <h4>Configurar Tabela de Produtos no Supabase</h4>
                <p>
                  Para sincronizar alterações de preços e itens entre todos os dispositivos, execute o script SQL de criação da tabela "products" no Supabase SQL Editor.
                </p>
              </div>
            </div>
            <div className="db-alert-actions">
              <button className="btn-sql-copy" onClick={handleCopySql}>
                <Copy size={16} /> Copiar SQL do Banco
              </button>
              <a 
                href="https://supabase.com/dashboard/project/abdwsujajtnkpnorufin/sql" 
                target="_blank" 
                rel="noreferrer"
                className="btn-sql-link"
              >
                Abrir Supabase SQL Editor <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {dbStatus && dbStatus.isDbAvailable && (
          <div className="db-status-pill success">
            <CloudCheck size={18} color="#059669" />
            <span>Sincronização com o Banco de Dados Supabase Ativa! Todos os preços e itens salvos aqui ficam salvos no servidor.</span>
          </div>
        )}

        <div className="admin-filter-bar">
          <div className="search-input-wrapper">
            <Search size={18} color="#9CA3AF" />
            <input 
              type="text" 
              placeholder="Buscar produto por nome ou descrição..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filter-wrapper">
            <select 
              value={selectedCategoryFilter} 
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            >
              <option value="all">Todas as Categorias ({products.length})</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({products.filter(p => p.category === cat.id).length})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-table-card">
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Nome do Produto</th>
                  <th>Categoria</th>
                  <th>Preço De / Por</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(prod => (
                    <tr key={prod.id}>
                      <td className="col-photo">
                        <img src={prod.image} alt={prod.name} className="table-thumb" />
                      </td>
                      <td className="col-name">
                        <strong>{prod.name}</strong>
                        <p className="col-desc-teaser">{prod.description}</p>
                      </td>
                      <td className="col-cat">
                        <span className="cat-pill">{prod.categoryLabel || prod.category}</span>
                      </td>
                      <td className="col-price">
                        {prod.originalPrice && prod.originalPrice > prod.price && (
                          <span className="table-original-price">
                            R$ {prod.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                        <strong className="table-sale-price">
                          R$ {prod.price.toFixed(2).replace('.', ',')}
                        </strong>
                      </td>
                      <td className="col-actions">
                        <button 
                          className="btn-icon edit" 
                          onClick={() => handleOpenEdit(prod)}
                          title="Editar Produto"
                        >
                          <Edit3 size={16} /> Editar
                        </button>
                        <button 
                          className="btn-icon delete" 
                          onClick={() => handleDeleteProduct(prod.id, prod.name)}
                          title="Excluir Produto"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center empty-cell">
                      Nenhum produto encontrado com os filtros atuais.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            
            <div className="admin-modal-header">
              <h3>
                <Package size={20} color="#991B1B" /> 
                {editingProduct && editingProduct.isNew ? 'Cadastrar Novo Produto' : `Editar: ${editingProduct?.name}`}
              </h3>
              <button className="modal-close-round" onClick={() => setIsModalOpen(false)} aria-label="Fechar">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="admin-modal-form">
              <div className="admin-form-grid">
                
                <div className="form-group full-width">
                  <label htmlFor="prodName">Nome do Produto *</label>
                  <input 
                    type="text" 
                    id="prodName" 
                    placeholder="Ex: Morango Red Gold 500g" 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="prodCat">Categoria *</label>
                  <select 
                    id="prodCat" 
                    value={formCategory} 
                    onChange={(e) => setFormCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                {/* Preço Normal (De) + Preço com Desconto (Por) */}
                <div className="form-group">
                  <label htmlFor="prodOriginalPrice">Preço Normal (R$) <span className="label-optional">(Opcional - De)</span></label>
                  <input 
                    type="number" 
                    step="0.01" 
                    id="prodOriginalPrice" 
                    placeholder="Ex: 30.00" 
                    value={formOriginalPrice}
                    onChange={(e) => setFormOriginalPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prodPrice">Preço com Desconto (R$) * <span className="label-required">(Por)</span></label>
                  <input 
                    type="number" 
                    step="0.01" 
                    id="prodPrice" 
                    placeholder="Ex: 24.90" 
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="prodDesc">Descrição do Item</label>
                  <textarea 
                    id="prodDesc" 
                    rows="3" 
                    placeholder="Escreva detalhes sobre o sabor, peso ou harmonização..."
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                  ></textarea>
                </div>

                {/* Imagem do Produto: Apenas Upload de Foto */}
                <div className="form-group full-width image-field-box">
                  <label><ImageIcon size={16} /> Imagem do Produto</label>
                  <div className="image-preview-and-inputs">
                    {formImage && (
                      <div className="img-preview-frame">
                        <img src={formImage} alt="Prévia" />
                      </div>
                    )}
                    <div className="img-input-methods">
                      <div className="file-upload-button-wrapper">
                        <label className="btn-file-upload">
                          <Upload size={16} /> Carregar Foto do Dispositivo
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="admin-modal-footer">
                <button type="button" className="btn-admin-cancel" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-admin-save">
                  <Save size={18} /> Salvar Produto
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}
