<template>
    <Page
        title="About"
        :image="publicImage('about.png')"
        :back="{name: 'home'}"
    >
        <Content>
            <h3>Hi There</h3>
            <p>
                As you could have probably guessed, my name is Trent Woodhouse.
                Professionally, I'm a full time student and part-time caffeine-craving machine, pounding away
                at school projects and papers. When I'm not hitting the books, you can find me working on side
                projects, both personal and freelance.
            </p>
            <p>
                While it's fun and all to be writing a novel's worth of code every day, I like to spend some time
                away from the computer and enjoy some of my favorite activities. Swimming, lifting, and longboarding
                are only some of them, but we all know it's goofing off with friends that keeps me going every day.
            </p>
            <h3>Professional Experience</h3>
            <h5>Iowa State Web Developer</h5>
            <p>
                Being my first real dip into web development, I can't express how valuable the experience was to me.
                I went in barely writing working PHP code, and came out with multiple new and/or improved websites
                for Iowa State. Not only that, but it furthered enabled me to make some of my own websites, like this one.
            </p>
            <h5>Freelancer</h5>
            <p>
                When quaratine puts you out of work and makes free time an abundance, what do you do? All I know was that
                there was no way I was going to let it go to waste. So, I've elected to accept work from clients and
                began making professional websites solo. Altough dropping the team work evironment and taking up the sole
                responsibility of multiple projects seems daunting, I cannot think of a more rewarding and growth-enducing
                experience.
            </p>
            <h5>Buildertrend Intern</h5>
            <p>
                Only just started this job, but I can definitely stay I'm excited. It's been ranked #1 place
                to work in Omaha, so if you're another fellow software engineer major, you know where to apply to.
                This will be my first real experience working with React, the arguably most popular Javascript framework,
                and will also be working to further improve my web development skills.
            </p>
        </Content>
    </Page>
</template>

<script>
    import Page from "../layouts/Page";
    import Content from "../layouts/Content";
    export default {
		name: "About",
        components: {Content, Page},
    }
</script>

<style scoped>

</style>
