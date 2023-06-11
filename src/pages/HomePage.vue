<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-between my-4">
        <h3>All Posts</h3>
        <router-link class="btn btn-primary" to="/create-post"
          >Create Post</router-link
        >
      </div>
      <table class="table table-striped">
        <thead>
          <th>id</th>
          <th>title</th>
          <th>Author</th>
          <th>Email</th>
          <th>action</th>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.email }}</td>
            <td>
              <router-link
                :to="{ path: `/edit-post/${post.id}` }"
                class="btn btn-primary mx-2"
                >Edit</router-link
              >
              <button class="btn btn-danger" @click="deletePost(post.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async deletePost(id) {
      const data = await axios.delete(`http://localhost:3000/posts/${id}`);
      if (data) {
        this.getPosts();
      }
    },
    async getPosts() {
      const { data } = await axios.get("http://localhost:3000/posts");
      this.posts = data;
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
