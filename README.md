<br>

<p align="center">
  <img width="120px" src="https://raw.githubusercontent.com/omidnikrah/github-readme-stackoverflow/master/stackoverflow.svg" />
  <h2 align="center">GitHub Readme StackOverflow</h2>
  <p align="center">Show your StackOverflow profile status on your READMEs!</p>
</p>

<br>

### Usage

Copy paste following markdown into your markdown content, and that's it. Easy Easy Tammam Tammam!

Change the `?userID=` value to your StackExchange userID (for the relevant site).

```md
[![Omid Nikrah StackOverflow](https://github-readme-stackoverflow.vercel.app/?userID=6558042)](https://stackoverflow.com/users/6558042/omid-nikrah)
```

[![Omid Nikrah StackOverflow](https://github-readme-stackoverflow.vercel.app/?userID=6558042)](https://stackoverflow.com/users/6558042/omid-nikrah)
[![Omid Nikrah StackOverflow](https://github-readme-stackoverflow.vercel.app/?userID=6558042&theme=dark)](https://stackoverflow.com/users/6558042/omid-nikrah)

#### Compact Layout

If you want to have a compact layout, just you need to add `layout=compact` as a parameter. Check out the options.

[![Omid Nikrah StackOverflow](https://github-readme-stackoverflow.vercel.app/?userID=6558042&layout=compact)](https://stackoverflow.com/users/6558042/omid-nikrah)
[![Omid Nikrah StackOverflow](https://github-readme-stackoverflow.vercel.app/?userID=6558042&layout=compact&theme=dark)](https://stackoverflow.com/users/6558042/omid-nikrah)

#### Other Sites

You can use other StackExchange sites instead of StackOverflow too, such as Biology StackExchange or AskUbuntu. Just add `site={SITE}` as a parameter. Examples:
- `site=biology`
- `site=askubuntu`
- `site=money`

The site name provided as a parameter must be the same as the domain for that site. For example, Personal Finance and Money StackExchange has a URL of `money.stackexchange.com`, so `site=money` must be provided.

> **Warning**
> Different sites have different userIDs. So your StackOverflow userID will not be the same as your Biology StackExchange userID.

[![Zohan Subhash Biology.SE](https://github-readme-stackoverflow.zohan.tech/?userID=68669&site=biology)](https://biology.stackexchange.com/users/68669/zo-bro-23)
[![Zohan Subhash Biology.SE](https://github-readme-stackoverflow.zohan.tech/?userID=68669&theme=dark&site=biology)](https://biology.stackexchange.com/users/68669/zo-bro-23)

<br>

## Options
|    Name    |           Description           |        Default value       |
| ---------- | ------------------------------- | -------------------------- |
| userID     | Your StackExchange userID            | REQUIRED                |
| theme      | Theme of the StackOverflow card (light or dark)      | light     |
| layout     | Layout of the StackOverflow card (compact or default) | default |
| site       | Which StackExchange site to get the data from | stackoverflow |

<br>

## Contributors
- [Omid Nikrah](https://github.com/omidnikrah)
- [Soroush Chehresa](https://github.com/soroushchehresa)
- [Zohan Subhash](https://github.com/Zo-Bro-23)
- [Jéf Bueno](https://github.com/jfbueno)

<br>

## Deploy your own
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/omidnikrah/github-readme-stackoverflow)
