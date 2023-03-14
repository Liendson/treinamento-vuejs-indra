<template>
  <div class="full-screen">
    <v-card outlined shaped>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="alunos"
          :items-per-page="5">
          <template v-slot:[`item.acoes`]="{ item }">
            <v-btn>Botão1</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import AlunosService from "@/services/alunos.service";

export default {
  mixins: [AlunosService],
  data: () => ({
    headers: [
      { text: 'Nome', align: 'center', value: 'nome', },
      { text: 'Curso', align: 'center', value: 'curso' },
      { text: 'Ações', align: 'center', value: 'acoes' }
    ],
    alunos: [
      { nome: 'Liendson', curso: 'Curso1' },
      { nome: 'Liendson', curso: 'Curso1' }
    ]
  }),
  mounted() {
    this.$consultarAlunos().then(({ data }) => { console.log(data) })
  },
}
</script>
