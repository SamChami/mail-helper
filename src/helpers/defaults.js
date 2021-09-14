const shopify = `
{
  "id": 0,
  "email": "sam@chami.io",
  "name": "Sam Chami",
  "order_name": "Order CO",
  "order_number": "",
  "created_at": "",
  "tags": "",
  "transactions": "",
  "tax_price": "",
  "tax_lines": "",
  "tax_line.title": "",
  "tax_line.price": "",
  "tax_line.rate": "",
  "tax_line.rate_percentage": "",
  "customer": "",
  "billing_address": "",
  "billing_address.first_name": "",
  "billing_address.last_name": "",
  "billing_address.company": "",
  "billing_address.phone": "",
  "shop": {
    "name": "Window repair",
    "phone": "702-555-5555"
  },
  "subtotal_price": "",
  "discounts": "",
  "discounts_amount": "",
  "discounts_savings": "",
  "total_price": "",
  "financial_status": "",
  "requires_shipping": "",
  "shipping_method.title": "",
  "shipping_method.price": "",
  "shipping_price": "",
  "shipping_address": "",
  "shipping_address.first_name": "",
  "shipping_address.company": "",
  "shipping_address.phone": "",
  "line_items": "",
  "fulfillment_status": "",
  "note": "",
  "attributes": "",
  "referring_site": "",
  "landing_site": "",
  "landing_site_ref": "",
  "cancelled": "",
  "cancelled_at": "",
  "cancel_reason": "",
  "unique_gateways": "0",
  "location": "",
  "order_status_url": "",
  "invoice_url": "",
  "reserve_inventory_until": "",
  "user": "",
  "user.name": "",
  "user.email": "",
  "name": "",
  "number": "",
  "created_at": "",
  "requires_shipping": "",
  "shipping_method.title": "",
  "shipping_method.price": "",
  "shipping_price": "",
  "shipping_address": "",
  "shipping_address.first_name": "",
  "shipping_address.company": "",
  "shipping_address.phone": "",
  "item_count": "",
  "note": "",
  "location": "",
  "line.grams": "",
  "line.image": "",
  "line.line_price": "",
  "line.original_line_price": "",
  "line.final_line_price": "",
  "line.price": "",
  "line.product.metafields": "",
  "line.product.title": "",
  "line.product.vendor": "",
  "line.properties": "",
  "line.quantity": "",
  "line.requires_shipping": "",
  "line.selling_plan_allocation": "",
  "line.taxable": "",
  "line.title": "",
  "line.url": "",
  "line.line_item.variant.barcode": "",
  "line.variant.compare_at_price": "",
  "line.variant.image": "",
  "line.variant.metafields": "",
  "line.variant.sku": "",
  "line.variant.title": "",
  "amount": "",
  "refund_line_items": "",
  "refund_line.line_item": "",
  "refund_line.quantity": "",
  "service_name": "",
  "fulfillment.estimated_delivery_at": "",
  "fulfillment.fulfillment_line_items": "",
  "fulfillment.item_count": "",
  "fulfillment.requires_shipping": "",
  "fulfillment.tracking_company": "",
  "fulfillment.tracking_numbers": "",
  "fulfillment.tracking_urls": "",
  "fulfillment_line.line_item": "",
  "fulfillment_line.quantity": "",
  "delivery_instructions": "",
  "discount_allocation.amount": "",
  "discount_allocation.discount_application": "",
  "discount_application.target_selection": "",
  "discount_application.target_type": "",
  "discount_application.title": "",
  "discount_application.total_allocated_amount": "",
  "discount_application.type": "",
  "discount_application.value": "",
  "discount_application.value_type": "",
  "shop.email_logo_url": "",
  "shop.email_logo_width": "",
  "shop.email_accent_color": ""
}
`;

const main = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Transactional Email</title>
    <style>
      /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */

      /*All the styling goes here*/

      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
      }

      body {
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top;
      }

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {
        background-color: #f6f6f6;
        width: 100%;
      }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #ffffff;
        border-radius: 3px;
        width: 100%;
      }

      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
      }

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px;
      }

      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }

      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;
      }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px;
      }

      a {
        color: #3498db;
        text-decoration: underline;
      }

      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {
        box-sizing: border-box;
        width: 100%; }
        .btn > tbody > tr > td {
          padding-bottom: 15px; }
        .btn table {
          width: auto;
      }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center;
      }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize;
      }

      .btn-primary table td {
        background-color: #3498db;
      }

      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .clear {
        clear: both;
      }

      .mt0 {
        margin-top: 0;
      }

      .mb0 {
        margin-bottom: 0;
      }

      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      }

      .powered-by a {
        text-decoration: none;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0;
      }

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }

    </style>
  </head>
  <body class="">
    <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>Hi there,</p>
                        <p>Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="left">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td> <a href="http://htmlemail.io" target="_blank">Call To Action</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                        <p>Good luck! Hope it works.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div class="footer">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-block">
                    <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
                    <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif">Unsubscribe</a>.
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by">
                    Powered by <a href="http://htmlemail.io">HTMLemail</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`;

const simple = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Email Skellie</title>
    <style>

    </style>
  </head>
  </body>
    <h1>Your email here!</h1>

  </body>
</html>
`

const modules = {
  main,
  simple,
  shopify,
};

export default modules;
