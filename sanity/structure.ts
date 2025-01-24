import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
              S.documentTypeListItem("navbar").title("Navbar"),
              S.documentTypeListItem("header").title("Header"),
              S.documentTypeListItem("whyQoobiss").title("Why Qoobiss Section"),
              S.documentTypeListItem("darkFeature").title("Dark Feature"),
              S.documentTypeListItem("lightFeature").title("Light Feature"),
              S.documentTypeListItem("faq").title("FAQ"),
              S.documentTypeListItem("footer").title("Footer"),
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
            ])
        ),
    ]);
