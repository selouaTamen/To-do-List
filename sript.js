const RootComponent = {
  data() {
    return {
      choseAfaire: false,
      aFaire: "",
      choseAfaire: [
        {
          content: "courses",
          toDo: true,
        },
      ],
      selectedaFaire: null,
    };
  },

  methods: {
    addAfaire() {
      this.choseAfaire.push({ content: this.aFaire, toDo: true });
      this.aFaire = "";
    },

    supAfaire(index) {
      this.choseAfaire.splice(index, 1);
    },

    modifAfaire(index) {
      this.choseAfaire[index].toDo = false;
    },
  },
};

Vue.createApp(RootComponent).mount("#app");
