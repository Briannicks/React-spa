# Personal Project Showcase App

A simple React app built with Vite, matching the provided mock-up.

## How to run it

```
npm install
npm run dev
```

## Component Tree

```
App (holds projects and searchTerm state)
├── AddProjectForm (local state: title, description)
├── SearchBar
└── ProjectList
    └── ProjectCard (x however many projects match the search)
```

## State and Props

- **App** holds the two pieces of state that everything else depends on:
  - `projects` — the array of all projects
  - `searchTerm` — the current text typed into the search bar

  These live in `App` (the nearest common parent) because both the form
  and the search bar and the list all need to read or update them.

- **AddProjectForm** has its own local state for `title` and `description`
  since only this form needs them. On submit, it calls `props.onAddProject`
  (passed down from `App`) with the new title and description, then clears
  its inputs.

- **SearchBar** has no state of its own. It's a controlled input: its
  value comes from `props.searchTerm`, and every keystroke calls
  `props.onSearchChange` to update the state up in `App`.

- **ProjectList** receives the already-filtered `projects` array plus
  `onDeleteProject`, and maps over the list to render a `ProjectCard`
  for each one.

- **ProjectCard** receives `id`, `title`, `description`, and `onDelete` as
  props. Clicking the ✕ button calls `onDelete(id)`, which bubbles back up
  to `App` and removes that project from state.

## Styling

Plain CSS in `src/App.css`, styled to match the card layout in the
mock-up, with a small responsive tweak for narrow screens.
