<template>
  <div>
    请求结果： {{ message  }}
  </div>
</template>
<script>
  module.exports = {
    data: function() {
      return {
        value: "Title"
      };
    },
    asyncData: async function({ req, url, user }) {
      var message = await fetch("/test/py01").then(resp => resp.json());
      return { message };
    }
  };
</script>