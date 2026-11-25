import { Clock, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Screen } from "@/components/ui/Screen";
import { useSiteContact } from "@/hooks/useSiteContact";
import { mailtoHref, telHref } from "@/lib/contactDefaults";

export function RequestQuoteScreen() {
  const { phoneDisplay, email, addressLine1, addressLine2 } = useSiteContact();
  const quoteEmailHref = `${mailtoHref(email)}?subject=${encodeURIComponent("Request a quote")}`;

  return (
    <Screen>
      <Seo title="Request a quote" description="Email Amaspace for a quote on engineering services or products." />
      <section className="bg-[#f4f7fa] py-12 md:py-16 lg:py-20">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            <div className="lg:col-span-5">
              <h1 className="font-heading text-3xl font-extrabold text-navy md:text-4xl">Start your project</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Tell us what engineering services or products you need, and our team will get in touch to discuss your requirements.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-navy">Rapid response</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">Expect to hear from an engineer within 24 business hours.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <FileText className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-navy">Detailed proposals</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">We provide clear, itemized quotes outlining scope, timelines, and technical approaches.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10 rounded-2xl bg-navy p-6 text-white shadow-card md:p-8">
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                    <a href={telHref(phoneDisplay)} className="text-white/90 hover:text-orange">{phoneDisplay}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                    <a href={mailtoHref(email)} className="break-all text-white/90 hover:text-orange">{email}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                    <span className="text-white/90">{addressLine1}<br />{addressLine2}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-bold text-navy">Request a quote by email</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  For services, tell us the project location and what work you need. For products, include the
                  product name or model, quantity, and delivery location. Please include your contact details.
                </p>
                <a href={quoteEmailHref} className="cta-glow-primary mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-hover">
                  <Mail className="h-4 w-4" aria-hidden />
                  Open email draft
                </a>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  This opens a draft in your email app. Add your details and press Send there. If it doesn’t open,
                  copy this address into your email:{" "}
                  <a href={quoteEmailHref} className="break-all font-semibold text-blue underline">{email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Screen>
  );
}
