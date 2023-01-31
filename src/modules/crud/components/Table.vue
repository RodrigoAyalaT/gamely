<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div v-if="games" class="border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Nombre del juego
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Fecha de lanzamiento
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Imagen de portada
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Desarrolladora
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Precio
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Descripción
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Borrar
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                >
                  Editar
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="game in games" :key="game.id">
                <td class="px-6 py-4 text-sm font-medium text-gray-800">
                  {{ game._id }}
                </td>
                <td class="px-6 py-4 text-sm text-center text-gray-800">
                  {{ game.name }}
                </td>
                <td class="px-6 py-4 text-sm text-center text-gray-800">
                  {{ game.releaseDate }}
                </td>
                <td class="px-6 py-4 text-sm text-center text-gray-800">
                  <img :src="game.coverImage" alt="" />
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  <a
                    class="text-green-500 text-center hover:text-green-700"
                    href="#"
                  >
                    {{ game.company }}
                  </a>
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  <a
                    class="text-red-500 text-center hover:text-red-700"
                    href="#"
                  >
                    ${{ game.price }}
                  </a>
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  {{ game.description }}
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  <button class="" @click="deleteGame(game._id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  <button class="" @click="updateGame(game._id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableCrud",
  data() {
    return {
      games: [],
    };
  },
  
  methods: {
    getGames() {
      this.axios.get("https://games.showvlad.com/api/games").then((response) => {
        this.games = response.data;
        
      });
    },
    deleteGame(id) {
      this.axios.delete(`https://games.showvlad.com/api/games/${id}`);
    },
    updateGame(id) {
      this.$emit("openUpdateForm", id);
    },
  },
  mounted() {
    this.getGames();
  },
};
</script>
