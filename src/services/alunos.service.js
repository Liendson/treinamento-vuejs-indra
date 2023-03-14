const baseURI = "/Alunos";

const mixin = {
  methods: {
    $consultarAlunos(params) {
      return this.$api().get(`${baseURI}`, params);
    }
  }
}

export default mixin;