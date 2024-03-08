/* from: https://github.com/framer/motion/blob/main/packages/framer-motion/src/render/dom/scroll/types.ts */

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%"

type EdgeUnit = `${number}${SupportedEdgeUnit}`

type NamedEdges = "start" | "end" | "center"

type EdgeString = NamedEdges | EdgeUnit | `${number}`

type Edge = EdgeString | number

type Intersection = `${Edge} ${Edge}`

type ProgressIntersection = [number, number]

export type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>