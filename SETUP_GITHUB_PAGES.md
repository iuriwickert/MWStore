# 🚀 Guia de Configuração do GitHub Pages

Este guia irá ajudá-lo a ativar o GitHub Pages para publicar seu site MW-Store.

## Passo a Passo

### 1. Acesse as Configurações do Repositório

1. Vá para o repositório no GitHub: https://github.com/iuriwickert/MWStore
2. Clique em **Settings** (Configurações) no menu superior
3. No menu lateral esquerdo, clique em **Pages**

### 2. Configure o GitHub Pages

Na seção **Build and deployment**:

1. **Source**: Selecione **GitHub Actions**
2. O workflow já está configurado (arquivo `.github/workflows/pages.yml`)

### 3. Execute o Workflow (Primeira Vez)

1. Vá para a aba **Actions** do repositório
2. Selecione o workflow **Deploy to GitHub Pages**
3. Clique em **Run workflow** → **Run workflow**
4. Aguarde o deployment ser concluído (geralmente leva 1-2 minutos)

### 4. Acesse seu Site

Após o deployment, seu site estará disponível em:

**https://iuriwickert.github.io/MWStore/**

O site será automaticamente redirecionado para: https://iuriwickert.github.io/MWStore/mwpromo/

## Atualizações Automáticas

Após a configuração inicial, qualquer push para a branch `main` ou `master` irá:

✅ Automaticamente disparar o workflow  
✅ Fazer o build do site  
✅ Publicar as atualizações  

Não é necessário fazer nada manualmente!

## Verificando o Status

Para verificar o status do deployment:

1. Vá para a aba **Actions**
2. Veja o status do último workflow
3. ✅ Verde = Sucesso
4. ❌ Vermelho = Erro (clique para ver os logs)

## Atualizando Produtos

Para atualizar os produtos no site:

1. Edite o arquivo `mwpromo/data.js`
2. Faça commit e push das mudanças
3. O site será atualizado automaticamente em 1-2 minutos

## Solução de Problemas

### O site não está aparecendo

1. Verifique se o workflow foi executado com sucesso em **Actions**
2. Aguarde alguns minutos após o primeiro deployment
3. Limpe o cache do navegador (Ctrl+Shift+R)

### Erro no workflow

1. Vá para **Actions**
2. Clique no workflow com erro
3. Leia os logs para identificar o problema
4. Verifique se o GitHub Pages está habilitado em Settings

### Site mostra 404

1. Confirme que a URL está correta
2. Verifique se os arquivos `index.html` existem no repositório
3. Execute o workflow manualmente em **Actions**

## Domínio Customizado (Opcional)

Se você quiser usar um domínio próprio:

1. Vá em **Settings** → **Pages**
2. Em **Custom domain**, insira seu domínio
3. Configure os registros DNS conforme instruído
4. Aguarde a propagação do DNS (pode levar até 48h)

## Suporte

Para mais ajuda:
- 📖 [Documentação do GitHub Pages](https://docs.github.com/pages)
- 💬 [Discord Oficial](https://discord.gg/MV6Z8qYv)

---

**Nota**: Este repositório já está configurado e pronto para publicação! Basta seguir os passos acima para ativar o GitHub Pages.
