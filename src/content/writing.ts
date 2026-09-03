export type WritingPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  body: string[]
}

// Keep drafts and unapproved AI-assisted notes outside the public repository.
export const writingPosts: WritingPost[] = [
  {
    slug: 'keep-testing-the-tools-you-use',
    title: 'Keep testing the tools you use',
    description:
      'Why I make room to compare AI tools and agent workflows, even after finding one that works for me.',
    publishedAt: '2026-09-02',
    readingTime: '5 min read',
    body: [
      'I do most of my coding work in Codex with GPT-5.6 models right now. That is not because I think I found the universally best setup. It is because it fits the work I am doing and the way I like to work.',
      'I spent time using Opus 5 as well. It could produce good work, but I often found the experience unpleasant for coding tasks. The tone did not click for me, and it had a habit of overthinking straightforward requests and turning them into larger engineering exercises than they needed to be. I found myself spending too much time steering it back to the actual task.',
      'Switching tools was useful because it gave me something concrete to compare against. With Codex and GPT-5.6, the workflow has felt more direct for me, so I use them almost all the time. But that does not mean I should stop looking around.',
      'A model can be a better fit for one kind of work and a worse fit for another. A model that is not my favorite for a coding task might understand a visual UI change more naturally when I describe it in plain language. It might make a better first pass on a design problem, ask a better clarifying question, or have a workflow that is easier to review. Opus might be better for some of those tasks. I will not know if I never give it another chance.',
      'There is a cost to testing. Trying a new model or tool can slow down a task that I already know how to finish. I have to learn its defaults, see where it gets stuck, and figure out what kind of prompt or context it responds to. That cost is real, but it can be worth paying occasionally. Staying with one workflow forever is also a choice, and it can quietly become an inefficient one.',
      'I think about agent orchestration the same way. More agents and more handoffs sound productive, but they are not automatically better. A new agent does not have the same context as the one that started the work. It may miss a decision that was already made, repeat exploration, or make an implementation mistake that a stronger reviewing agent then has to correct.',
      'That creates a useful question: is it actually faster to hand work from one agent to another, or would a stronger agent have done the work correctly the first time? The answer depends on the task. Parallel agents can help when the work splits cleanly into independent pieces. Handoffs can help when a fresh review catches something the first agent missed. But they can also add coordination, lost context, and cleanup without improving the result.',
      'For me, the important measure is not how many agents were involved or how quickly the first response arrived. It is how long it took to reach a result I trust. That includes the time spent reviewing, correcting, re-explaining context, and undoing unnecessary work.',
      'I do not need to run a full comparison every day. A small experiment on a real task is usually enough to learn something useful. Over time, that gives me a better sense of which model to reach for, when to keep a task with one agent, and when extra coordination is actually justified.',
      'The point is not to find one permanent winner. It is to keep enough hands-on experience with the tools that I can make a deliberate choice when the task changes.',
    ],
  },
]

export function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug)
}

export function getWritingMeta(post: WritingPost) {
  const publishedAt = new Date(`${post.publishedAt}T00:00:00Z`)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(publishedAt)

  return `${formattedDate} / ${post.readingTime}`
}
