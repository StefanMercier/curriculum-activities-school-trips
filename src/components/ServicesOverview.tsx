import { Button } from "@/components/ui/button";
import SampleActivity from "@/components/SampleActivity";

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Interactive Curriculum Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The goal of these curriculum activities is to create a more engaging experience for students on their educational tours to Washington, New York, and Boston.
          </p>
          <div className="max-w-5xl mx-auto text-lg text-muted-foreground space-y-4 mb-12">
            <p>
              For example, you can have your students take on the role of Lincoln, John Wilkes Booth, and other historical characters and prepare a presentation in front of their schoolmates when they are at the Lincoln Memorial.
            </p>
            <p>
              Each student group (for example, a group of 40 or 50) would have 10 to 12 activities where 4-5 students can participate in presenting and interacting with their presentation. It changes the traditional tour guide presents with distracted kids. Kids are connected, engaged, and watch their schoolmates give them the information. You can also use these activities to prepare them for their next school trip too.
            </p>
          </div>
        </div>
      </div>
      
      <SampleActivity />
    </section>
  );
};

export default ServicesOverview;