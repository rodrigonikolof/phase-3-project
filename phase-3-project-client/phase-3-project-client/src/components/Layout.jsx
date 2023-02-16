import { styled } from '@mui/system';

export default function Layout({children}){

const Styled = styled('div')({
    background: 'rgb(241, 240, 235)',
    width: '100%'
})

    return (
        <div>
            <Styled>
            <div className="page-container">
                {children}
            </div>
            </Styled>
        </div>
    )
}