---
title: Identifying, defining and prioritising tech debt in an Agile delivery team
pubdate: 2024-10-27T08:44:00.000Z
desc: A strategic approach to managing technical debt on an agile delivery project.
---
After spending some time recently thinking about technical debt on DfE Family Hubs, I wanted to share how our team tackled identifying, prioritizing, and defining technical debt.

## What is technical debt?

Technical debt (aka tech debt) occurs when teams prioritize fast delivery over quality, pushing out new features quickly, with plans to **fix stuff later**.

It's a common occurrence on Agile teams, due to:

* Rapid iteration
* Changing requirements
* Focus on velocity

Technical debt isn't necessarily **bad**! It's the **natural result** of working in an iterative, agile fashion.

## WIP: Approach

As our team inherited Family Hubs, we first had to spend some time acquainting ourselves with the codebase to better understand the technical debt landscape (how much is there? how complex is it?)

This meant that we each individually had an idea of the state of technical debt on our project as things stood, but we also wanted to ensure we had a process for tackling technical debt going forward.

Our solution was twofold:

1. Spend time defining technical debt tasks now
2. Agree on an effort budget (e.g. Story Points) at regular intervals (e.g. every sprint) in order to tackle technical debt going forward

The latter was easy enough: we got this agreed with our Product Owner and Delivery Manager. The former needed a bit more thought.

To understand our technical debt, we followed a 5-step process:

1. **Brainstorm**: Write down what we understand about the technical debt.
2. **Prioritise**: Decide what needs to be done now and what can wait.
3. **Define**: Clearly explain the technical issues and create Jira tickets for them.
4. **Refine**: Discuss these issues with the team to make sure everyone understands.
5. **Execute**: Address and deploy

![Infographic showing the prioritisation steps. From left to right: Brainstorm, prioritise, define, refine, execute](/img/tech-debt-steps.jpeg)

## Brainstorm

To begin with, we set up a shared Lucid board and spent 20 minutes getting everything out of our heads and onto paper. After that, we spent time grouping them by category. In the end, we identified 5 distinct categories to help us visualise the breadth of the work. Each post-it note was discussed with the team so everyone had a shared understanding of what each note represented and the problem it was trying to solve.

![A collection of post-it notes showing technical debt tasks grouped by category.](/img/techdebt-board.jpg)

## Prioritise

Once we had a collection of ideas, we mapped them onto an impact v. effort matrix. This allowed to view low-effort & high-impact task (i.e. we should do this ASAP, and can do it quickly), vs. high-effort & low-impact tasks (i.e. a lot of work and not worth doing). We were then able to rank these cards, giving us a rough order to inform our priorities.

![A collection of cards on an impact vs. effort matrix.](/img/image-27-10-2024-at-12.10.jpg)

## Define

Once we had a rough idea of priority, we grouped the cards into a now and later lists. Each list had its own Kanban board, allowing us to track the write-up progress of each card. I worked as the lead on this, writing tickets up into Jira tickets, defining acceptance criteria, etc., to slowly build a technical debt backlog.

![Two groupings (now and later) with cards in each.](/img/image-27-10-2024-at-12.13.jpg)

## Refine

As the technical debt backlog grew, we planned ad-hoc refinement sessions to run through the tickets with the team, ensure they made sense, that all the requirements were captured, and assign an effort value (for us,  Story Points)

![A list of tickets in the technical debt backlog in Jira.](/img/image-27-10-2024-at-12.18.jpg)

## Okay, but why?

While addressing technical debt may not always provide immediate benefits, it's important to have a process to address/keep on top of technical debt for a variety of reasons:

1. It makes your codebase more maintainable and easier to change
2. Because of this, it cuts the time it takes for developers to make changes, leading to quicker development and release cycles
3. Some technical debt can cut running costs (simplifying architecture, improving build pipeline efficiency, and more)
4. And some technical debt can address security concerns, or make them more visible, making your service more secure and resilient

On Family Hubs, we:

1. Identified potential running costs of around 50%
2. Drastically reduced deployment time and effort: it used to be a multi-day, full-team exercise, and now it takes an hour or two and a couple of team members
