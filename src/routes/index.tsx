import { createFileRoute } from '@tanstack/react-router'
import classes from "../PageCSS/home.module.css"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className={classes.mainContent}>
      <h3>Welcome Home!!!!</h3>
    </div>
  )
}