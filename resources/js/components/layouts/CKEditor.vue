<template>
    <div class="ckeditor">
        <editor-menu-bar :editor="editor" v-slot="{commands, isActive}" class="ckeditor-menu">
            <div class="p-2">
                <b-link
                    v-for="button in buttons"
                    class="ckeditor-button"
                    :class="{'active': isActive[button.type]()}"
                    @click="commands[button.type]()"
                    type="button"
                >
                    <b-icon :icon="button.icon" :scale="1.5"/>
                </b-link>
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
        data() {
            return {
                editor: new Editor({
                    content: '<p>This is just a <b>boring paragraph</b></p>',
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
                    ]
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

                    // 'paragraph',
                    // 'heading',
                    // 'hardBreak',
                    // 'undo',
                    // 'redo',
                    // 'link',
                ]
            }
        },
        methods: {
            yeet(data) {
                console.log('yeet', data);
            }
        },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style scoped>

</style>
