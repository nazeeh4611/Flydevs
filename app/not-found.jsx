import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ButtonLink } from './components/ui'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main" className="pt-[72px]">
        <div className="shell flex min-h-[70svh] flex-col items-start justify-center py-24">
          <p className="font-mono text-sm text-muted">404</p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.035em]">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-body">
            The link may be old or mistyped. Head back home or browse our work.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/work" variant="secondary" arrow={false}>
              See our work
            </ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
