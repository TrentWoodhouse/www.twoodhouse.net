<template>
    <div class="ckeditor">
        <editor-menu-bar :editor="editor" v-slot="{commands, isActive, getMarkAttrs}" class="ckeditor-menu">
            <div class="p-2">
                <span
                    v-for="(button, n) in buttons"
                    :key="n"
                >
                    <b-link
                        v-if="!button.custom"
                        :id="button.type"
                        class="ckeditor-button"
                        :class="{'active': isActive[button.type](button.params)}"
                        @click="commands[button.type](button.params)"
                        type="button"
                        tabindex="-1"
                    >
                        <b-icon :icon="button.icon" :scale="1.5"/>
                    </b-link>
                    <span v-else-if="button.type === 'link'">
                        <b-link
                            :id="button.type"
                            class="ckeditor-button"
                            :class="{'active': isActive[button.type](button.params)}"
                            @click="href = getMarkAttrs('link').href"
                            type="button"
                            tabindex="-1"
                        >
                            <b-icon :icon="button.icon" :scale="1.5"/>
                        </b-link>
                        <b-tooltip target="link" triggers="click blur" placement="bottom">
                            <b-form @submit.prevent inline class="mb-0">
                                <b-input v-model="href" placeholder="https://"/>
                                <b-link @click="commands['link']({href})" class="text-secondary ml-2"><b-icon icon="check2" font-scale="2"/></b-link>
                                <b-link @click="commands['link']({href: null})" class="text-secondary ml-2"><b-icon icon="x" font-scale="2"/></b-link>
                            </b-form>
                        </b-tooltip>
                    </span>
                </span>
            </div>
        </editor-menu-bar>
        <editor-content :editor="editor" class="ckeditor-content p-3"/>
    </div>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions';

    export default {
        components: {
            EditorContent,
            EditorMenuBar,
        },
        props: {
            value: String,
        },
        data() {
            return {
                href: '',
                editor: new Editor({
                    content: this.value,
                    extensions: [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({ levels: [1, 2, 3] }),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Link(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Strike(),
                        new Underline(),
                        new History(),
                    ],
                    onUpdate: ({ getHTML }) => {
                        this.$emit('input', getHTML());
                    }
                }),
                buttons: [
                    {
                        type: 'bold',
                        icon: 'type-bold',
                    },
                    {
                        type: 'italic',
                        icon: 'type-italic',
                    },
                    {
                        type: 'strike',
                        icon: 'type-strikethrough',
                    },
                    {
                        type: 'underline',
                        icon: 'type-underline',
                    },
                    {
                        type: 'heading',
                        icon: 'type-h1',
                        params: {level: 1}
                    },
                    {
                        type: 'heading',
                        icon: 'type-h2',
                        params: {level: 2}
                    },
                    {
                        type: 'heading',
                        icon: 'type-h3',
                        params: {level: 3}
                    },
                    {
                        type: 'link',
                        icon: 'link',
                        params: {href: 'https://www.google.com'},
                        custom: true,
                    },
                    {
                        type: 'code',
                        icon: 'code',
                    },
                    {
                        type: 'code_block',
                        icon: 'code-square',
                    },
                    {
                        type: 'bullet_list',
                        icon: 'list-ul',
                    },
                    {
                        type: 'ordered_list',
                        icon: 'list-ol',
                    },
                    {
                        type: 'horizontal_rule',
                        icon: 'hr',
                    },
                    {
                        type: 'blockquote',
                        icon: 'blockquote-left',
                    },

                    // 'hardBreak',
                    // 'undo',
                    // 'redo',
                ]
            }
        },
        mounted() {
            this.$root.$on('bv::tooltip::hidden', e => {
                this.href = '';
            });
        },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style scoped>

</style>
