export const Footer=()=>{
    return (
        <div>
          <table style={{ height: '2px', width: '100%', borderSpacing: '0px' }}>
            <tbody>
              <tr>
                <td style={{ backgroundColor: '#ff6600' }} />
              </tr>
            </tbody>
          </table>
          <br />
          <div style={{ textAlign: 'center' }}>
            <span >
              <a href="#">Guidelines</a>
              &nbsp;| <a href="/newsfaq">FAQ</a>
              &nbsp;| <a href="#">Support</a>
              &nbsp;| <a href="https://github.com/HackerNews/API">API</a>
              &nbsp;| <a href="#">Security</a>
              &nbsp;| <a href="#">Lists</a>
              &nbsp;| <a href="#">Bookmarklet</a>
              &nbsp;| <a href="#">DMCA</a>
              &nbsp;| <a href="#">Apply to YC</a>
              &nbsp;| <a href="#">Contact</a>
            </span>
            <br />
            <br />
            <form style={{ marginBottom: '1em' }}>
              Search: 
              <input
                type="text"
                name="q"
                size={17}
                autoCorrect="off"
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="false"
              />
            </form>
          </div>
        </div>
    );
  }