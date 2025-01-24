import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("navbar").title("Navbar"),
      S.listItem()
        .title("Home")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
              S.documentTypeListItem("header").title("Header"),
              S.documentTypeListItem("whyQoobiss").title("Why Qoobiss Section"),
              S.documentTypeListItem("darkFeature").title("Dark Feature"),
              S.documentTypeListItem("lightFeature").title("Light Feature"),
              S.documentTypeListItem("faq").title("FAQ"),
            ])
        ),
      S.listItem()
        .title("Our Solutions")
        .child(
          S.list()
            .title("Products Section")
            .items([
              S.documentTypeListItem("products").title("All Products"),
              S.listItem()
                .title("Origin")
                .child(
                  S.list()
                    .title("Origin Page Sections")
                    .items([
                      S.documentTypeListItem("origin").title("Main Content"),
                      S.documentTypeListItem("originFeatures").title(
                        "Features"
                      ),
                    ])
                ),
              S.listItem()
                .title("Ontrace")
                .child(
                  S.list()
                    .title("Ontrace Page Sections")
                    .items([
                      S.documentTypeListItem("ontrace").title("Main Content"),
                      S.documentTypeListItem("ontraceFeatures").title(
                        "Features"
                      ),
                    ])
                ),
              S.listItem()
                .title("Omnicheck")
                .child(
                  S.list()
                    .title("Omnicheck Page Sections")
                    .items([
                      S.documentTypeListItem("omnicheck").title("Main Content"),
                      S.documentTypeListItem("omnicheckFeatures").title(
                        "Features"
                      ),
                    ])
                ),
            ])
        ),
      S.documentTypeListItem("getInTouch").title("Get In Touch"),
      S.documentTypeListItem("footer").title("Footer"),
    ]);
