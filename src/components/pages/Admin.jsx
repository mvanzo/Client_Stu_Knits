export default function Admin({ currentUser }) {
    return(
        <div>
            {currentUser && currentUser.admin == true ? 
            
            'admin is logged in'
            : 
            
            ''}
        </div>
    )
}