import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavigation } from "@/components/MainNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-4 text-lg text-gray-500 sm:px-24 lg:px-32 xl:px-48">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" href="#">
              Get started
            </Button>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Live demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-gray-500 sm:px-24 lg:px-32 xl:px-48">
            Explore the features that make our platform the best choice for your business.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h3>
              <p className="mt-2 text-gray-500">
                Track your business performance with our comprehensive analytics dashboard.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Automation Tools</h3>
              <p className="mt-2 text-gray-500">
                Automate repetitive tasks and streamline your workflow with our powerful automation tools.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Integration Support</h3>
              <p className="mt-2 text-gray-500">
                Connect all your favorite tools seamlessly with our extensive integration support.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-lg sm:px-24 lg:px-32 xl:px-48">
            Join thousands of businesses already using our platform to achieve their goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="secondary" size="lg" href="#">
              Start your free trial
            </Button>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="mt-6 flex items-center justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
