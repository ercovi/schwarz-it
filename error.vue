<script setup>
const props = defineProps({
    error: Object,
})

const metaTitle =
    props.error?.statusCode === '404' ? '404 - Page not found' :
    props.error?.statusCode === '400' ? '400 - Bad Request' : 'Something went wrong'

const defaultText = 'Sorry, something went wrong.<br>Please try again later'

const text404 =
    '404<br>The page could not be found<br>Please visit our <a href="/" class="text-blue-500 hover:underline">homepage to start fresh</a>'

const text400 =
    '400<br>The request could not be understood<br>Please check the URL or parameters and try again'

useHead({
    title: metaTitle,
})
</script>
<template>
    <div class="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
        <main class="p-6">
            <h2
                class="text-xl font-semibold text-gray-800"
                v-html="error?.statusCode === '404' ? text404 : error?.statusCode === '400' ? text400 : defaultText"
            />
            <DevOnly>
            {{ error }}
            </DevOnly>
        </main>
    </div>
</template>