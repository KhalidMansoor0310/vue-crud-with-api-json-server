<template>
  <div class="container">
    <div class="row">
      <h3 class="my-3">Create Post</h3>
      <div class="col-md-6 m-auto">
        <form @submit.prevent="formSubmit">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title of post"
              v-model="post.title"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model="post.email"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter author name"
              v-model="post.author"
            />
          </div>
          <button class="btn btn-info" :disabled="loading">
            <span v-if="loading">Loading...</span>
            <span v-else>Create</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AppCreatePost",
  data() {
    return {
      loading: false,
      post: {
        title: "",
        author: "",
        email: "",
      },
    };
  },
  methods: {
    formSubmit() {
      this.loading = true;
      axios.post("http://localhost:3000/posts", this.post).then(() => {
        this.$router.push("/");
        this.loading = false;
      });
    },
  },
};
</script>
