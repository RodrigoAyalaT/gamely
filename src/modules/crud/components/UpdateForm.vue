<template>
  <div v-if="openModal === true">
    <div
      class="modal fixed z-0 left-0 top-0 flex justify-center items-center p-4 min-h-screen w-full overflow-x-hidden overflow-y-auto bg-neutral-800/90"
    >
      <div
        class="relative z-10 rounded-lg shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Update Game {{ id }}
          </h3>
          <button
            @click="openModal = false"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div id="post" class="p-6 space-y-6">
          <p
            class="text-lg font-semibold leading-relaxed text-gray-500 dark:text-gray-400"
          >
            Game Name
          </p>
          <input
            type="text"
            v-model="gameInfo.name"
            placeholder="Ej. User2233"
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          />

          <p
            class="text-lg font-semibold leading-relaxed text-gray-500 dark:text-gray-400"
          >
            Image URL
          </p>
          <input
            type="url"
            pattern="https://.*"
            size="30"
            required
            v-model="gameInfo.coverImage"
            placeholder="https://example.com"
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          />
          <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Company Name
          </p>
          <input
            type="text"
            pattern="https://.*"
            size="30"
            required
            v-model="gameInfo.company"
            placeholder="https://example.com"
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          />
          <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Price
          </p>
          <input
            type="number"
            pattern="$1"
            size="30"
            required
            v-model="gameInfo.price"
            placeholder="https://example.com"
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          />
          <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Release
          </p>
          <input
            type="date"
            size="30"
            required
            v-model="gameInfo.releaseDate"
            placeholder="https://example.com"
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          />
          <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Description
          </p>
          <textarea
            v-model="gameInfo.description"
            cols="30"
            rows="10"
            placeholder="This game is about..."
            class="bg-white rounded-full w-full h-8 px-5 pb-1 ring-0 text-black"
          ></textarea>
        </div>
        <div class="p-3 grid grid-cols-6 gap-2 content-center">
          <div class="cols-2 col-start-3">
            <button
              @click="updateGame(id)"
              type="submit"
              class="text-white bg-blue-600 rounded-full px-8 py-2"
            >
              Update
            </button>
          </div>
          <div class="cols-2 col-start-5">
            <button
              @click="openModal = false"
              class="text-white bg-gray-600 rounded-full px-6 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateForm",
  data() {
    return {
      date: new Date(),
      openModal: false,
      idGame: "",
      gameInfo: {},
    };
  },
  props: {
    id: String,
  },
  watch: {
    id: function (val) {
      if (val) {
        this.openModal = true;
        this.idGame = val;
        this.getGameInfo(val);
      }
    },
  },
  emits: ["openUpdateForm"],
  methods: {
    updateGame(id) {
      this.axios
        .put(`https://games.showvlad.com/api/games/${id}`, this.gameInfo)
        .then(() => {
          this.gameInfo = {};
          this.openModal = false;
        });
    },
    getGameInfo(id) {
      this.axios
        .get(`https://games.showvlad.com/api/games/${id}`)
        .then((response) => {
          this.gameInfo = response.data;
          console.log(this.gameInfo, this.idGame);
        });
    },
  },
  mounted() {},
};
</script>
