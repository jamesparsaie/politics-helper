import { createFileRoute } from '@tanstack/react-router'
import classes from "../PageCSS/home.module.css"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className={classes.mainContent}>
      <div className={classes.headerContent}>
        <h1>Politics Policy & All the Rest</h1>
      </div>
    </div>
  )
}