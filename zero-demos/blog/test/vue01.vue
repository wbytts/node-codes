<template>
    <div>You have {{ messagesCount }} messages.123</div>
</template>
<script>
module.exports = {
    data: function () {
        return {
            value: "Title",
        };
    },
    asyncData: async function ({ req, url, user }) {
        var messages = await fetch("/api/messages").then((resp) => resp.json());
        return { messagesCount: messages.length };
    },
};
</script>
