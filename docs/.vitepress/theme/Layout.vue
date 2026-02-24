<template>
	<HomeLayout v-if="frontmatter.layout === 'index'" />
	<DefaultTheme.Layout v-else />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeLayout from '../theme/layouts/HomeLayout.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

</script>