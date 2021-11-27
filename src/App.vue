<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-img dark src="./assets/bg.jpg" gradient="to top right, rgba(19,84,122,.5), rgba(20,108,199,.8)" class="pt-5 text-center">
          <v-avatar size="100">
            <v-icon size="60">mdi-bookshelf</v-icon>          
          </v-avatar>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Estante Virtual
              </v-list-item-title>
              <v-list-item-subtitle>
                Livros, Quadrinhos e Mangás
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-img>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to='item.to' link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        prominent
        height="212"
        color="#fcb69f"
        dark      
        src="./assets/bg.jpg" 
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(20,108,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-list-item class="mx-auto">
                <v-list-item-icon>
                  <v-icon size="80">mdi-bookshelf</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-h4">
                    Estante Virtual
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h6">
                    Livros, Quadrinhos e Mangás
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container> 
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: false,
      items: [
          { title: 'Home', icon: 'mdi-bookshelf', to:'/' },
          { title: 'Quadrinhos', icon: 'mdi-book-open-blank-variant', to:'/comics' },
          { title: 'Mangás', icon: 'mdi-notebook-multiple', to:'/mangas' },
          { title: 'Livros', icon: 'mdi-book-open-page-variant', to:'/books' },
          { title: 'Sobre', icon: 'mdi-help-box', to:'/about' },
        ],
    }),
  }
</script>

<style>

</style>