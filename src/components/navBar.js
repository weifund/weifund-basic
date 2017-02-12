import yo from 'yo-yo';

export default function navBar(options) {
  const t = options.t;

  return yo`<nav class="navbar nav navbar-fixed-top row">
    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 nav-left hidden-xs hidden-sm">
      <a href="/" style="padding-right: 50px;">
        <img
        width="17" height="17"
        style="margin-bottom: 3px; margin-right: 6px;"
        class="icon icons8-Compass"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFaUlEQVRoQ91aTVIbRxT+3gSShaFiL1PFyKIqlrILnMDKCQwnsDgB+ARqnSDiBMgnsDhBxAlQdpHsKoSGqiwRBV4gE71Uz2hQT0/3/EqVqsxy1NP9vvdef+9PhBU8VXH78ge6f8ugPWI0AK4CVI1uzWOAxkzoE3jwyNsXY/FqWvZ4KrqBFPp7+voOzCcE7BXZh4EBiDozfnFeFExuAIHgD8eB4PSyiOD6NwyeBkC2TvMCyQWg3vaOmVmsSnATECISw5Z7mlUxmQD8Iv6uzvH0KclVGPiTGH0m7jOc8WexM1CFeCNu9gjzKjE1mNAg4FebkNK1HGwc/iV+GqcBSQVQE5MDAGcWrV8z0HWw0c1ymCrMQilNApoAXhvdCjgaiUovCUQigDfipumAzwyb3xEcMRQ7nTQNZfm9Lm5OGHPpmj/q6+ego89ip2vbxwrAKjzz+Yy2m3kvWxoQnxz4vktE7/KAMAKQbkOgT/FD6cOqtG4DJK0B8O8Gqx+a3CkGIPDNb5eqzzP4juGcJJkyTcN5fjdZX1Ktg819/a7FANSEd6mzTZof5hEu61ozCAxGwt1X94gAMJtv/W6Tz52i8jwD8C8R7q8irsN8PmpXJI2u/flZeA0HaIyEK9TDaq1JT73Y0pVm2N4NSeQZQE14goBW+LH0+xm2q6tmG10TMsA5waVt/AP89kW4fXXNQrFjlWIZaIdAfQAm7QPrdZ0FWbQIJAOZfC6Gwm2YTK27tmoFH4DhwlwPhaulw6vxIoPg/sZz0L6efqgn1oUn04rniB0Siw9AZx7VRKsRG7AJLvdn8MeRqISWMB4Zd/GAkcgvRvBwG6Wmjd28uY0NqNx/E/ctB3RiW0NIP08qgPF0pe7xiK1XpEddmVWOhFuoQIldvgx1Qxbth/vWhDdQs1gGH5JuGjBOh23Xqq00l8pb8GTRfnhmveV1QDheMiXaVBeepK23Cn0ac440we1sZv8yj/aDuxrL0S6oLiZXagGexgZJQEyxRK43pcnB+3TfV89bxIzL5TseSwuwumgo3NQixwRCjyUqk8XcNKCeQq6qy7syAKqQMoqPRCVS8NfEZBpaokyUXwuAuPZ5OhKVV6qlamJyG+ZZZeLMWgDo7OB7CEGMWm7bv3xtr0UMP0kro335vQmAHqITQ7ru/6YAozCa33mLFkfLRCwLsyVfYlyXptGamHQJ9D6LMGW1b6TRMoEsSfsqICk4QJ0Ztjpl0nNjIDOkErGyzabdNO2vSnAllYiUu34qUTSZS9U+4/SRtkQZjauKsyZzQYjWk6T0i2bTvkwPHGyKVWWziva1ijFIOi0FDY+HorJrc514SA9y+nUIvgSwjCPyXaSgMdWdSSVlXXh/yBp2wetrFTzg/mizS2WzpKI+Uv2HmpDdg+8ACeBiDpLNrkgXOgud5llj7JboRb3c0FL990bCPYymBJ6YA329e5BHqDxra8KTbf3n1o4eS/4/jS3ltkfKNvXC5NFc2bWW1mKs3LU1dwfRRhJPGc6H/7i5e+dgcy+1uRvEBUt7nXCSZ35VxApyDgdGbHAio26m9np4qH06g94MW0erirDheQGJPJypFzb8Lak7XnTENM07TUyyRtL0M621n1r/LoZ8MmWOza8AHjNR1+GNj3lTB79TR0/vibkZn+oHhQ+AZqkhX6i1xUSxlzYaZXDfIfTn7FybxqwOzV/PWY5YSY5Zrc0z2VxzsHGQRSmpFlBNnzRNLHJh9W+k1vNOP3MBWEbsBzmIk381MLhVfihl6obcAFTW2MTXA/KB2KfuSXCkqzCo8w0vekVZrTAAVbBFHtWA/LtNkKXK2YI+fb8GMGagD/Bghu1+UaHVs/8F3Pxz6PE49eQAAAAASUVORK5CYII=">
        ${t("navBar.discover")}
      </a>
      <a href="https://weifundit.slack.com" target="_blank">Slack</a>
    </div>
    <div class="col-xs-6 col-sm-12 col-md-4 col-lg-4 text-center">
      <a href="/"><img id="nav-logo" src="/styles/weifund-logo-small.png"></a>
    </div>
    <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 nav-right text-left-xs
      text-left-sm hidden-xs hidden-sm">
      <a href="/account" style="padding-right: 50px;">${t("navBar.account")}</a>
      <a href="https://weifund.readthedocs.org/" style="padding-right: 50px;" target="_blank">${t("navBar.docs")}</a>
      <a href="https://goo.gl/forms/R0w3vaKdjv3s7SqY2"" target="_blank">Submit A Bug</a>
    </div>

    <div class="col-xs-6 visible-xs text-right hidden-lg">
      <button type="button" class="navbar-toggle visible-sm visible-xs"
        style="padding: 0px;" data-target-id="nav-mobile-toggle">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <div class="col-sm-12 hidden-xs hidden-md hidden-lg">
      <hr />
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <a href="/">${t("navBar.discover")}</a>
          <a href="https://weifundit.slack.com" target="_blank">Slack</a>
        </div>
        <div class="col-xs-6 col-sm-6 text-right">
          <a href="/account" style="padding-right: 15px;">${t("navBar.account")}</a>
          <a href="https://weifund.readthedocs.org/" style="padding-right: 15px;" target="_blank">${t("navBar.docs")}</a>
          <a href="https://goo.gl/forms/R0w3vaKdjv3s7SqY2" target="_blank">Submit A Bug</a>
        </div>
      </div>
    </div>

    <div id="nav-mobile-toggle" class="hidden-md hidden-lg">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <br />
          <br />
          <h3>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="/">${t("navBar.discover")}</a>
                <a href="https://weifundit.slack.com" target="_blank">Slack</a>
              </li>
              <li class="list-group-item">
              </li>
              <li class="list-group-item">
                <a href="/account" style="padding-right: 15px;">${t("navBar.account")}</a>
                <a href="https://weifund.readthedocs.org/" style="padding-right: 15px;" target="_blank">${t("navBar.docs")}</a>
                <a href="https://goo.gl/forms/R0w3vaKdjv3s7SqY2" target="_blank">Submit A Bug</a>
              </li>
            </ul>
          </h3>
        </div>
      </div>
    </div>

  </nav>`;
}
