import os

from flask import (
    Blueprint,
    send_from_directory
)

upload_bp = Blueprint(

    "uploads",

    __name__,

    url_prefix="/api/uploads"
)


@upload_bp.route(
    "/<filename>"
)
def uploaded_file(
    filename
):

    return send_from_directory(

        os.path.join(

            os.getcwd(),

            "uploads"
        ),

        filename
    )