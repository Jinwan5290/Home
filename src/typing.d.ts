// declare module '*.module.less' {
//   interface classclass  {
//     [key: string]: string
//   }
//   export default classclass
// }

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}