# Dra. Raquel Godoi — Harmonização Facial & Corporal

Site one-page (arquivo único `index.html` + pasta `img/`) para a Dra. Raquel Godoi,
com animações, galeria com lightbox, carrossel de avaliações, FAQ, mapa e
botões de WhatsApp com mensagem pronta.

Rondonópolis — MT · Instagram [@dra.raquelgodoi](https://www.instagram.com/dra.raquelgodoi/)

## Como publicar

É um site estático. Basta subir a pasta `raquel-godoi/` (com `index.html` e `img/`)
para qualquer hospedagem (Cloudflare Pages, Netlify, Vercel, Hostinger, etc.).

## Como configurar (o que editar)

Abra o `index.html` num editor de texto.

### 1. WhatsApp, telefone e endereço — 1 lugar só
No **bloco `<script>` (perto do fim do arquivo)**, edite o objeto `CONFIG`:

```js
var CONFIG = {
  whatsapp:       "5566996855600",          // DDI + DDD + número, só dígitos
  telefone:       "(66) 99685-5600",        // como aparece escrito no site
  enderecoLinha1: "Atendimento com hora marcada",
  enderecoLinha2: "Rondonópolis — MT"
};
```

Isso alimenta **todos** os botões de WhatsApp, o telefone e o endereço do site inteiro.

### 2. Avaliações (depoimentos)
Na seção `<!-- AVALIAÇÕES -->` os depoimentos atuais são **exemplos ilustrativos**.
Substitua pelos avaliações reais do Google/pacientes (procure o comentário
`►►► SUBSTITUA os depoimentos ◄◄◄`).

### 3. Fotos
As imagens ficam em `img/`. Para trocar, mantenha os mesmos nomes de arquivo
(`hero.webp`, `sobre.webp`, `res1.webp`…) ou atualize os `src` no HTML.

### 4. Mapa
O mapa usa uma busca pelo nome. Para fixar o endereço exato, troque o `src`
do `<iframe id="mapFrame">` pelo código "Incorporar um mapa" do Google Maps.

## Créditos

Fontes: Marcellus, Playfair Display e Manrope (Google Fonts).
Desenvolvido por **Vitrine Sites**.
