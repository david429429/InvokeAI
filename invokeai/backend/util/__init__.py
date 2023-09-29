"""
Initialization file for invokeai.backend.util
"""
from logging import Logger  # noqa: F401

from .attention import auto_detect_slice_size  # noqa: F401
from .devices import (  # noqa: F401
    CPU_DEVICE,
    CUDA_DEVICE,
    MPS_DEVICE,
    choose_precision,
    choose_torch_device,
    normalize_device,
    torch_dtype,
)
from .logging import InvokeAILogger  # noqa: F401
from .util import (  # noqa: F401
    GIG,
    Chdir,
    ask_user,
    directory_size,
    download_with_resume,
    instantiate_from_config,
    url_attachment_name,
)
