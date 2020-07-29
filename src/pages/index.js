import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from '../components/button'

export default () => (
  <Layout>
    <h1 style={{ color: "green" }}>hello from gatsby</h1>
    <h1>Hello World</h1>
    <h1>Hello People</h1>
    <ExampleButton>Click me</ExampleButton>
  </Layout>
)
