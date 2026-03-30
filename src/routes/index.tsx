import { Text } from '@/components/ui/text'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-start justify-center gap-4 p-6">
        <Text variant="body-sm" className="text-neutral-500">
          console.log(“Hello World”);
        </Text>
        <Text variant="display-lg" className="uppercase">
          Software Engineer at <span className="text-brand-300">Adobe</span>.
          <br />
          Making a difference, one PR at a time.
        </Text>
        <Text variant="body-lg" className="text-neutral-500">
          {'///////////////////////'}
        </Text>
      </section>
    </main>
  )
}
