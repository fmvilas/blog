import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="w-screen py-1 mb-8 bg-[#ffc103]" />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
