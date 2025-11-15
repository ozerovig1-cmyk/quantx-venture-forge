import { Linkedin, Twitter, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src="/brand/logo.png" alt="QuantXlr8 logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm max-w-md text-brand">
              From pilot to paid deployment in 90 days. We match startups with enterprise BUs for real pilots that convert into revenue contracts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-brand">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-brand hover:text-accent transition-colors focus-ring">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-brand hover:text-accent transition-colors focus-ring">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-brand hover:text-accent transition-colors focus-ring">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-brand">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-brand hover:text-accent transition-colors focus-ring">
                  Venture-Client 101
                </a>
              </li>
              <li>
                <a href="#" className="text-brand hover:text-accent transition-colors focus-ring">
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand hover:text-accent transition-colors focus-ring" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand hover:text-accent transition-colors focus-ring" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand hover:text-accent transition-colors focus-ring" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-brand">
          <p>&copy; {new Date().getFullYear()} QuantXlr8. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;