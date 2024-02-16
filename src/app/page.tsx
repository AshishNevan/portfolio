import Card from "@/app/Card";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#FFB574] flex flex-wrap items-center justify-around p-4">
            <Card content="https://www.google.com" icon={"/portfolio/react.svg"} title="Portfolio website"
                  desc="This website right here."/>
            <Card content="https://www.google.com" icon={"/portfolio/tensorflow-icon.svg"} title="Rock Paper Scissors"
                  desc="Rock paper scissors AI player."/>
            <Card content="https://www.google.com" icon={"/portfolio/python-icon.svg"} title="Amazon Recommender"
                  desc="Amazon electronics recommender using Machine Learning."/>
            <Card content="https://ashishnevan.github.io/PigGame/" icon={"/portfolio/javascript.svg"} title="Pig Game"
                  desc="Turn-based 2-player web app game."/>
            <Card content="https://ashishnevan.github.io/GuessTheNumber/" icon={"/portfolio/javascript.svg"}
                  title="Guess The Number"
                  desc="A number guessing game made using javascript."/>
            <Card content="https://ashishnevan.github.io/CRUD-firebase/" icon={"/portfolio/firebase-icon.svg"}
                  title="Firebase CRUD"
                  desc="CRUD web app built on Firebase backend."/>
        </div>
    );
}
