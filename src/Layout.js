const Layout = ({children}) => {
  return (
    <div className="app-layout">
    <header className="app-header">    
      <h1>Header</h1>
    </header>  

    <main className="app-main">
      {children}
    </main>

    <footer className="app-footer">    
    <h3>Footer</h3>
    </footer>       
    </ div>        
  )
}

export default Layout


