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
    slug: 'junior-engineers-can-own-more-than-tickets-now',
    title: 'Junior engineers are owning more than tickets',
    description:
      'AI agents are changing how quickly new engineers can ramp up, but ownership and judgment still belong to the person doing the work.',
    publishedAt: '2026-09-05',
    readingTime: '6 min read',
    body: [
      'For a long time, the default path for a junior engineer was fairly clear. Join a new team, spend time learning the codebase, and pick up carefully scoped tickets while you build context. That is still a sensible way to learn. But I think the shape of the job is starting to change.',
      'I recently joined Coinbase, and I was able to start contributing much faster than I expected. On my first day, I could use agents to trace code paths, find relevant files, understand unfamiliar concepts, and get to a point where I could open PRs and help solve issues. The work still needed review and the surrounding context still mattered, but the time between joining and becoming useful was much shorter.',
      'That first week was not only about moving faster through a backlog. It gave me enough room to understand where the team had gaps. Within my first two weeks, I was scoping a project of my own rather than only taking the next assigned task. I was also working across anomaly detection, cloud-cost budget tracking and allocation, and smaller UI fixes at the same time.',
      'That is the part that feels different. Agents do not just make an individual ticket faster. They make it more practical for a newer engineer to own a problem end to end: learn the system, investigate the problem, propose a shape for the work, break it into pieces, and keep moving while separate threads of work are explored in parallel.',
      'I do not mean that an agent replaces the engineer. The useful model for me is closer to being a manager of a small set of agents. I can ask one to investigate an unfamiliar area of the codebase, another to trace an issue, and another to draft an implementation approach. While those tasks run, I can keep talking to teammates, make product decisions, or work on a different part of the project.',
      'The output is not automatically correct just because it arrived quickly. I still need to decide which questions are worth asking, give each task enough context, read the code that comes back, test the result, and understand the tradeoffs before I merge anything. The job is less about producing every line myself and more about staying responsible for the whole system of work.',
      'The new bottleneck is human context. It is easy to start several useful things at once and then lose track of why a decision was made, which assumption an agent used, or what needs to happen next. The more parallel work I run, the more deliberate I have to be about keeping one coherent picture of the project.',
      'Linear and Markdown files help me with that. I use them to keep a clear record of active work, current decisions, open questions, and next steps. They are not glamorous tools, but they let me return to a workstream without rebuilding all of the context from memory. They also make it easier to hand a focused, well-defined task to an agent instead of hoping it can infer everything that matters.',
      'There will still be times when a well-scoped ticket is exactly the right work for a junior engineer. Tickets are how teams make progress, and focused work is one of the best ways to learn a system. But I do not think a junior engineer has to wait as long to take real ownership anymore.',
      'AI raises the ceiling for how much a newer engineer can own early on. It also raises the bar for judgment. The opportunity is not to close more tickets with less thought. It is to become useful across a larger surface area while keeping the quality bar high enough that the extra velocity is actually valuable.',
    ],
  },
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
