<template>
  <div class="full-screen">
    <v-card
      elevation="1"
      outlined
      shaped>
      <v-card-title>Título</v-card-title>
      <v-card-subtitle>Subtítulo</v-card-subtitle>
      <v-card-text>Conteudo do Card</v-card-text>
    </v-card>
    <teste-component>
      <div slot="header">
        <h1>Aqui pode estar um título da página</h1>
      </div>
      <div slot="footer">
        <h2>Aqui pode estar um rodapé da página</h2>
      </div>
      <div>
        <h1>Aqui é o conteudo</h1>
      </div>
    </teste-component>
  </div>
</template>
