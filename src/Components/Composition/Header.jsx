export const Header = ()=>{
    console.log('props', props);
    return(
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            background: '10px',
            padding: "10px"

            
        }}>
            <div>
                Stark
            </div>
            {/* dynamic content */}
            {props.children}
            <div>Logo</div>
        </header>
    )
}