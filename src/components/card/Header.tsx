'use client';

const Title = () => {
    return (
        <img/>
        {'Akademia Sakteboardingu'}
        <iconGlass/>
        <iconCart/>
    )
}


const Link = () => {
    return (
        <>
        <p>{'Strona glowna'}</p>
        <p>{'Instruktor'}</p>
        <p>{'Szkóka'}</p>
        <p>{'Cennik'}</p>
        <p>{'Skateshop'}</p>
        
        </>
    )
}
const Header = () => {
  return <>
  <Title/>
  <Links/>
  </>;
};

export default Header;
