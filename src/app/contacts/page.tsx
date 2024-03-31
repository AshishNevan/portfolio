import Card from "@/app/Card";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#FFB574] flex flex-wrap items-center justify-around p-4">
            <Card content="https://www.linkedin.com/in/ashishnevan" icon={"/portfolio/linkedin-icon.svg"}
                  title="LinkedIn"
                  desc="LinkedIn"/>

        </div>
    )
}