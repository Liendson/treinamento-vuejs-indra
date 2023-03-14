import Swal from "sweetalert2";

const mixin = {
  methods: {
    $notifySuccess(content) {
      this.notify({ text: content, icon: "success" });
    },
    $notifyError(content) {
      this.notify({ text: content, icon: "error" });
    },
    $notifyInfo(content) {
      this.notify({ text: content, icon: "info" });
    },
    $notifyWarning(content) {
      this.notify({ text: content, icon: "warning" });
    },
    notify(options = undefined) {
      Swal.fire(options)
    }
  },
};

export default mixin;
