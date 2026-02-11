# 💎 MW-Store - Sistema de Liquidação

Sistema web interativo para gerenciamento e consulta de produtos em liquidação da MW-Store.

## 🚀 Sobre o Projeto

Este é um sistema de catálogo de produtos desenvolvido para facilitar a consulta de itens disponíveis em liquidação. O projeto oferece uma interface intuitiva onde os usuários podem:

- 🔍 Buscar produtos por nome
- 📦 Verificar disponibilidade em estoque
- 🛒 Criar lista de consulta de produtos
- 💰 Calcular valor total dos itens selecionados
- 📋 Copiar lista formatada para compartilhamento

## 🎯 Funcionalidades

- **Catálogo de Produtos**: Visualização completa de todos os itens disponíveis
- **Sistema de Busca**: Filtro em tempo real por nome do produto
- **Lista de Consulta**: Adicione produtos para criar uma lista personalizada
- **Controle de Estoque**: Visualização em tempo real da disponibilidade
- **Cálculo Automático**: Total calculado automaticamente
- **Exportação**: Copie sua lista formatada com um clique

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Design Responsivo

## 📦 Como Usar

### Acesso Online

Acesse diretamente através do GitHub Pages: [https://iuriwickert.github.io/MWStore/mwpromo/](https://iuriwickert.github.io/MWStore/mwpromo/)

### Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/iuriwickert/MWStore.git
```

2. Navegue até a pasta do projeto:
```bash
cd MWStore/mwpromo
```

3. Abra o arquivo `index.html` em seu navegador preferido.

## 📝 Estrutura do Projeto

```
MWStore/
└── mwpromo/
    ├── index.html      # Página principal
    ├── style.css       # Estilos da aplicação
    ├── script.js       # Lógica da aplicação
    └── data.js         # Dados dos produtos
```

## 🔧 Configuração

Para atualizar os produtos, edite o arquivo `data.js`:

```javascript
const dataUltimaAtualizacao = "10/02/2026 - 14:30";

const produtos = [
    { id: 1, nome: "Nome do Produto", preco: 50.00, estoque: 10 },
    // ... mais produtos
];
```

## 🎨 Personalização

- **Preços**: Edite os valores no arquivo `data.js`
- **Estoque**: Atualize as quantidades no arquivo `data.js`
- **Estilos**: Modifique o arquivo `style.css` para customizar cores e layout
- **Data de Atualização**: Altere a variável `dataUltimaAtualizacao` em `data.js`

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📞 Contato

- Discord: [Discord Oficial](https://discord.gg/MV6Z8qYv)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Autor

Desenvolvido por [Iuri Wickert](https://github.com/iuriwickert)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
